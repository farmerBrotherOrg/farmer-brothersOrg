import gsap from "gsap"


export class Animations {
    isDesktopDevice!: boolean;
    constructor() {
    }

    menuClick() {
        const menuContent = document.querySelector(`[data-menu-content]`) as HTMLElement;
        const isMenuOpened = menuContent?.getAttribute("data-menu-isopen");

        if (isMenuOpened === "false") { // open menu
            gsap.to(menuContent,
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    duration: 0.3,
                    onComplete: () => {
                        menuContent.setAttribute("data-menu-isopen", "true")
                    }
                })
        } else { // close menu
            gsap.to(menuContent,
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                    duration: 0.3,
                    onComplete: () => {
                        menuContent.setAttribute("data-menu-isopen", "false")
                    }
                })
        }
    }

    desktopScreenStyleReset() {
        const menuContent = document.querySelector(`[data-menu-content]`) as HTMLElement;
        const isMenuOpened = menuContent?.getAttribute("data-menu-isopen");
        if (this.isDesktopDevice) {
            gsap.set(menuContent,
                {
                    clipPath: "none"
                })
        } else if (isMenuOpened) {
            gsap.set(menuContent,
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                    onComplete: () => {
                        menuContent.setAttribute("data-menu-isopen", "false")
                    }
                })
        }

    }

    accordionClick(e: React.MouseEvent) {
        const clickedEle = e.currentTarget
        const accordionName = clickedEle.getAttribute("data-accordion-type");
        const clickedAccordionContent = document.querySelector(`[data-accordion-content="${accordionName}"]`) as
            HTMLElement;
        const currentOpenedAccordion = document.querySelector(`[data-accordion-isopen="true"]`);


        if (currentOpenedAccordion === clickedAccordionContent) {
            // close accordion cause its already opened
            gsap.to(clickedAccordionContent,
                {
                    height: "0",
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                    duration: 0.3,
                    onComplete: () => {
                        clickedAccordionContent.setAttribute('data-accordion-isopen', "false");
                    }
                }
            )
        } else if (currentOpenedAccordion) {
            // close current opened and open clicked accordion
            const tl = gsap.timeline({ defaults: { duration: 0.3 } });

            tl.to(currentOpenedAccordion,
                {
                    height: 0,
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                },
                "start"
            ).to(clickedAccordionContent,
                {
                    height: "auto",
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    duration: 0.3,
                    onComplete: () => {
                        currentOpenedAccordion.setAttribute('data-accordion-isopen', "false");
                        clickedAccordionContent.setAttribute('data-accordion-isopen', "true");
                    }
                },
                "start"
            )
        } else {
            // open clicked accordion
            gsap.to(clickedAccordionContent,
                {
                    height: "auto",
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    duration: 0.3,
                    onComplete: () => {
                        clickedAccordionContent.setAttribute('data-accordion-isopen', "true");
                    }
                }
            )
        }
    }
}