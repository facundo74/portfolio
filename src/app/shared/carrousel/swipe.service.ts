import { CarrouselComponent } from "./carrousel.component";

export class SwipeService {

    private startX      : number = 0;
    private moveX       : number = 0;
    private diffX       : number = 0;
    private offsetStart : number = 0;
    private minScrollX  : number = 40;

    public constructor(
        private carrousel: CarrouselComponent,
    ){}

    public touch(event: TouchEvent) {

        if (this.carrousel.swipe === false) {
            return;
        }

        if (this.carrousel.scroll === true) {
            return;
        }

        if (!event.type.startsWith('touch')) {
            throw new Error('Invalid event type');
        }

        let type = event.type.substring(5) as 'start' | 'move' | 'end';

        this[type](event);
    }

    public start(event: TouchEvent) {
        this.resetVars();
        this.startX = event.changedTouches[0].screenX;
        this.offsetStart = this.carrousel.offsetCarrousel;
    }

    public move(event: TouchEvent) {
        this.moveX = event.changedTouches[0].screenX;
        this.diffX = this.moveX - this.startX;
        this.carrousel.offsetCarrousel = this.offsetStart + this.diffX;
    }

    public end(event: TouchEvent) {
        let posicion = this.carrousel.posicion;
        if (Math.abs(this.diffX) > this.minScrollX) {
            if (this.diffX > 0) {
                if (posicion > 0) {
                    this.carrousel.incrementar(-1);
                    this.resetVars();
                    return;
                }
            } else {
                if (posicion < (this.carrousel.cantidad -1)) {
                    this.carrousel.incrementar(1);
                    this.resetVars();
                    return;
                }
                
            }
        }
        this.carrousel.setPosicion(this.carrousel.posicion);
        this.resetVars();
    }

    private resetVars() {
        this.startX = 0;
        this.moveX  = 0;
        this.diffX  = 0;
        this.offsetStart = 0;
    }
}