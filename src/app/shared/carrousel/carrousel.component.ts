/******************************************************************************
 *                                                                            *
 *                              A T E N C I O N                               *
 *                                                                            *
 * Es muy importante no modificar este archivo, por casos particulares de     *
 * ningún tipo.                                                               *
 * Este componente es GENÉRICO, y ninguna particularidad de implementación se *
 * reflejará a aquí.                                                          *
 *                                                                            *
 * Ante cualquier neceidad de realizar algún tipo de modificación, por favor  *
 * asegurarse que se trate EXPLÍCITAMENTE de un cambio GENÉRICO.              *
 *                                                                            *
 ******************************************************************************/


import { AfterContentInit  } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Component         } from '@angular/core';
import { ElementRef        } from '@angular/core';
import { EventEmitter      } from '@angular/core';
import { Input             } from '@angular/core';
import { OnInit            } from '@angular/core';
import { Output            } from '@angular/core';
import { ViewChild         } from '@angular/core';
import { SwipeService      } from './swipe.service';

@Component({
    selector    : 'app-carrousel',
    templateUrl : './carrousel.component.html',
    styleUrls   : [ './carrousel.component.scss' ]
})
export class CarrouselComponent implements OnInit, AfterContentInit {

    @ViewChild('contenido', { static: true }) private contenido? : ElementRef;
    @ViewChild('hueco',     { static: true }) private hueco?     : ElementRef;

    @Input()  public mostrarControles   : boolean = false;
    @Input()  public mostrarPosicion    : boolean = false;
    @Input()  public tipo               : string = 'scroll';
    @Input()  public tipoIncremento     : 'item' | 'pagina' = 'item';
    @Input()  public scroll             : boolean = false;
    @Input()  public swipe              : boolean = true;
    @Input()  public autoScrollWaitTime : number = 0;
    @Input()  public customClass        : string = 'default';
    @Output() public positionChange     : EventEmitter<number> = new EventEmitter<number>();

    public autoScrollInterval : any;
    public posiciones         : any[] = [];
    public cantidadPosiciones : number = 1;
    public anchoTira          : number = 0;
    public anchoHueco         : number = 0;
    public anchoCarrousel     : number = 0;
    public anchoElementos     : number = 0;
    public posicion           : number = 0;
    public cantidad           : number = 0;
    public offsetCarrousel    : number = 0;
    public swipeService       : SwipeService = new SwipeService(this);

    public constructor(
        private componenteRef: ElementRef,
        private changeDetector: ChangeDetectorRef
    ) {
    }

    public ngOnInit(): void {
        this.posiciones = [];
    }
    
    public ngAfterContentInit(): void {
        setTimeout(() => {
            this.configurarPosiciones();
        });
        
        this.setupOnContentChange('childList', () => {
            this.configurarPosiciones();
        });

        (new ResizeObserver((entries: ResizeObserverEntry[]) => {
            this.configurarPosiciones();
        })).observe(this.componenteRef.nativeElement);
    }

    public configurarPosiciones(): void {
        this.anchoCarrousel = this.componenteRef?.nativeElement.offsetWidth;
        let elementos       = this.contenido?.nativeElement.children;
        let hueco           = this.hueco?.nativeElement;

        if (elementos.length) {
            this.cantidad       = elementos.length || 0;
            this.anchoElementos = (elementos[0] as HTMLElement).offsetWidth;
            this.anchoHueco     = (hueco as HTMLElement).offsetWidth;
            this.anchoTira      = this.anchoElementos * this.cantidad; 
            if (this.anchoTira > this.anchoHueco) {
                this.cantidadPosiciones = Math.ceil((this.anchoTira - this.anchoHueco) / this.anchoElementos) + 1;
            } else {
                this.cantidadPosiciones = 1;
            }
            this.posiciones = Array(this.cantidadPosiciones).fill(0).map((x,i)=>i);
            this.setAutoScroll();
        }
    }

    public puedeMostrarControles(): boolean {
        return (this.mostrarControles && this.cantidadPosiciones > 1) && !this.scroll;
    }

    public puedeMostrarPosicion(): boolean {
        return (this.mostrarPosicion && this.cantidadPosiciones > 1) && !this.scroll;
    }

    private stopEvent(event: any) {
        event.stopPropagation();
        event.preventDefault();
    }

    public  clickAnterior(event: any) {
        this.stopEvent(event);
        this.incrementar(-1);
    }

    public clickPosterior(event: any) {
        this.stopEvent(event);
        this.incrementar(1);
    }

    public clickPosicion(event: any, posicion: number) {
        this.stopEvent(event);
        this.setPosicion(posicion);
    }

    public incrementar(cantidad: number = 1) {
        this.posicion += cantidad;
        this.setupOffsetCarrousel();

    }

    public setPosicion(posicion: number) {
        this.posicion = posicion
        this.setupOffsetCarrousel();
    }

    private setupOffsetCarrousel() {
        if (this.posicion > (this.cantidadPosiciones - 1)) {
            this.posicion = 0;
        }

        if (this.posicion < 0) {
            this.posicion = this.cantidadPosiciones - 1;
        }

        var offset = this.posicion * this.anchoElementos * -1;

        if ((offset + this.anchoTira) < this.anchoHueco && offset < 0) {
            offset = this.anchoHueco - this.anchoTira;
        }

        this.offsetCarrousel = offset;
        this.positionChange.emit(this.posicion);
    }

    public setAutoScroll(): void {
        if (this.autoScrollInterval) {
            clearInterval(this.autoScrollInterval);
        } 
        if (this.autoScrollWaitTime > 0) {
            this.autoScrollInterval = setInterval(() => {
                this.incrementar(1);
                this.changeDetector.detectChanges();
            }, this.autoScrollWaitTime);
        }
    }

    private setupOnContentChange(type: string, fn: Function) {
        const observer = new MutationObserver((mutationsList, observer) => {
            // Iterar sobre la lista de mutaciones
            for(let mutation of mutationsList) {
                // Verificar si hay mutaciones de tipo childList (cambios en los hijos del nodo)
                if (mutation.type === type) {
                    fn(observer);
                }
            }
        });
        // Empezar a observar el nodo objetivo con las opciones de configuración
        observer.observe(this.contenido?.nativeElement, { 
            childList: true, 
            subtree: true 
        });
    }

}
