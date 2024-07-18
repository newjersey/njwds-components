import { Component, getAssetPath, h } from '@stencil/core';


@Component({
    tag: 'njwds-banner',
    styleUrl: "../../../njwds/css/styles.css",
})
export class Banner {
    render() {
        const spriteSrc = getAssetPath("img/sprite.svg");
        const sealSrc = getAssetPath("img/nj_state_seal.png");

        return (
            <div class="nj-banner blue-bg">
                <div class="nj-banner__header">
                    <div class="grid-container-widescreen desktop:padding-x-7">
                        <div class="nj-banner__inner">
                            <div class="grid-col-auto">
                                <img class="nj-banner__header-seal" src={sealSrc} alt="NJ flag" />
                            </div>
                            <div class="grid-col-fill">
                                <a href="https://nj.gov">Official Site of the State of New Jersey</a>
                            </div>
                            <div class="grid-col-auto">
                                <div class="text-white">
                                    <ul>
                                        <li>Governor Phil Murphy &bull; Lt. Governor Tahesha Way</li>
                                        <li>
                                            <a href="https://nj.gov/subscribe/" target="_blank" rel="noreferrer">
                                                <svg
                                                    class="usa-icon bottom-neg-2px margin-right-05"
                                                    aria-hidden="true"
                                                    focusable="false"
                                                    role="img"
                                                >
                                                    <use xlinkHref={`${spriteSrc}#mail`}></use>
                                                </svg>
                                                Get Updates
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}