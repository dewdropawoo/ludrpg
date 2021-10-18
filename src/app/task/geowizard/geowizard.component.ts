import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryService } from 'src/app/inventory.service';
import * as L from 'leaflet';

@Component({
  selector: 'app-geowizard',
  templateUrl: './geowizard.component.html',
  styleUrls: ['./geowizard.component.css']
})
export class GeowizardComponent implements OnInit, AfterViewInit {
  private map?: L.Map;
  selectedLatLng?: L.LatLng;
  clickMarker?: L.Marker;
  
  constructor(private readonly inventoryService: InventoryService, private readonly router: Router) { }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3,
      attributionControl: false
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    L.control.attribution({
      position: 'bottomleft'
    }).addTo(this.map);

    this.map.on('click', (e: L.LeafletMouseEvent) => {
      this.selectedLatLng = e.latlng;

      this.clickMarker ? this.map?.removeLayer(this.clickMarker) : true;
      this.clickMarker = new L.Marker(this.selectedLatLng, {interactive: false});
      this.map?.addLayer(this.clickMarker);
    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initMap();
   }


  onCorrect() {
    this.inventoryService.setObtained('amogus', true);
    this.router.navigate(['/worldmap']);
  }

  onIncorrect() {
    this.inventoryService.setObtained('amogus', false);
    this.router.navigate(['/worldmap']);
  }

}
