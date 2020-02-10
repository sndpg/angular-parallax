import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
  ViewContainerRef
} from "@angular/core";
import { fromEvent, Subscription } from "rxjs";

@Directive({
  selector: "[parallax]"
})
export class ParallaxScrollDirective implements AfterViewInit, OnDestroy {
  private scrollEventSubscription: Subscription;
  private readonly htmlElement: HTMLElement;

  @Input()
  scrollSpeed: number;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.htmlElement = this.viewContainerRef.element.nativeElement;
  }

  ngAfterViewInit(): void {
    this.scrollEventSubscription = fromEvent(window, "scroll").subscribe(
      (scrollEvent: UIEvent) => {
        // console.log(scrollEvent);
        // console.log(scrollEvent.view.pageYOffset);
        if (scrollEvent.view) {
          let backgroundOffset = scrollEvent.view.pageYOffset * 0.5;
          this.renderer.setStyle(
            this.htmlElement,
            "background-position-y",
            "-" + backgroundOffset + "px"
          );
        }
      }
    );

    /*
    this.image = this.htmlElement.querySelector('background-image') as HTMLImageElement;
    this.image.onload = () => {
      this.originalWidth = this.originalWidth || this.image.offsetWidth;
      this.originalHeight = this.originalHeight || this.image.offsetHeight;
      console.log(this.image.offsetWidth, this.image.offsetHeight, this.image.width, this.image.height);

      this.setParallaxImage();
      this.updateParallaxImage();
      window.addEventListener('scroll', () => {
        this.updateParallaxImage();
      });
      window.addEventListener('resize', () => {
        this.setParallaxImage();
        this.updateParallaxImage();
      });
    };*/
  }

  ngOnDestroy(): void {
    this.scrollEventSubscription.unsubscribe();
  }

  // @HostListener('mouseenter')
  // onMouseEnter(){
  //   this.renderer.setStyle(this.htmlElement, 'background-position-y', '-200px');
  //   console.log(this.htmlElement);
  // }

  // @HostListener('mouseleave')
  // onMouseLeave(){
  //   this.renderer.setStyle(this.htmlElement, 'background-position-y', '0px');
  //   console.log(this.htmlElement);
  // }
  //
  // @HostListener('scroll')
  // onScroll(){
  //   this.renderer.setStyle(this.htmlElement, 'background-position-y', '100px');
  //   console.log(this.elementRef);
  // }
  //
  // @HostListener('mousewheel')
  // onMousewheel(){
  //   this.renderer.setStyle(this.htmlElement, 'background-position-y', '100px');
  //   console.log(this.elementRef);
  // }
  //
  //   private;
  //
  //   setParallaxImage(); {
  //   //set img style
  //   let;
  //   imgSize = this.originalWidth > this.htmlElement.offsetWidth ?
  //     {width: this.htmlElement.offsetWidth + 'px'} : {height: this.htmlElement.offsetHeight * 1.5 + 'px'};
  //   Object;
  // .
  //
  //   assign(this
  //
  // .
  //   image;
  // .
  //   style;
  // , {
  //   display: 'block';
  // ,
  //   position: 'absolute';
  // ,
  //   bottom: 0;
  // ,
  //   left: 0;
  // }
  //
  // ,
  // imgSize;
  // )
  // ;
  //
  // // set container style
  // Object.assign(this.htmlElement.style, {
  //   position: 'relative', overflow: 'hidden'
  // });
  //
  // // wrap image with a div, then set style
  // let imgWrapperEl: HTMLElement = <HTMLElement>this.htmlElement.querySelector('.parallax-img-wrapper');
  // if (!imgWrapperEl) {
  //   imgWrapperEl = document.createElement('div');
  //   imgWrapperEl.className = 'parallax-img-wrapper';
  //   imgWrapperEl.appendChild(this.image);
  //   this.htmlElement.appendChild(imgWrapperEl);
  // }
  // Object.assign(imgWrapperEl.style, {
  //   position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1
  // });
  // }
  //
  // private
  // updateParallaxImage();
  // :
  // void {
  //   let elRect = this.htmlElement.getBoundingClientRect();
  // let imgRect = this.image.getBoundingClientRect();
  //
  // let imgDist = imgRect.height - elRect.height;
  // let bottom = this.htmlElement.offsetTop + elRect.height;
  // let top = this.htmlElement.offsetTop;
  // let scrollTop = document.body.scrollTop;
  // let windowBottom = scrollTop + window.innerHeight;
  // let percentScrolled =
  //   (windowBottom - top) / (elRect.height + window.innerHeight);
  // //console.log(imgDist, percentScrolled, imgDist * percentScrolled);
  //
  // let parallax = Math.round((imgDist * percentScrolled));
  // if (
  //   (bottom > scrollTop) && (top < (scrollTop + window.innerHeight))
  // ) {
  //   this.image.style.bottom = parallax * -1 + 'px';
  //   //img.style.transform = "translate3D(0%," + parallax + "px, 0)";
  // }
  // }
}
