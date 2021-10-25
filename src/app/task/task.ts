import { InventoryService } from "../inventory.service";

export class Task {
    constructor(protected readonly inventoryService: InventoryService) {
        this.inventoryService.showInventory = true;
    }
}