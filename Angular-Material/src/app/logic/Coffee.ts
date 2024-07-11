import { PlaceLocation } from "./PlaceLocation";
import { TastingRating } from "./TastingRating";

export class Coffee {
    // Properties

    type: string = "";
    rating: number = 0;
    notes: string = "";
    tastingRating: TastingRating | null;

    constructor(
        public _id: string | null = null,
        public name: string = "",
        public place: string = "",
        public location: PlaceLocation | null = null) {
            this.tastingRating = new TastingRating();
            if (location==null) {
                this.location = new PlaceLocation();
            }
    }
}