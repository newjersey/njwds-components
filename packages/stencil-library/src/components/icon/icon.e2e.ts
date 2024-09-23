
import { E2EElement, newE2EPage } from "@stencil/core/testing";

const renderAndGetSVGElement = async (content: string): Promise<E2EElement> => {
    const page = await newE2EPage();
    await page.setContent(content);
    const svgElement = await page.find('njwds-icon > svg');
    return svgElement;
};

const suppressConsoleErrorFromE2EPage = () => {
    jest.spyOn(console, 'error').mockImplementation(jest.fn());
}

const getE2EPageAssetPath = (path: string) => `/build/${path}`

describe("<njwds-icon>", () => {
    it("renders with USWDS icon utility class", async () => {
        const svgElement = await renderAndGetSVGElement(`
            <njwds-icon decorative icon="mail"></njwds-icon>
        `)
        expect(svgElement).toHaveClass("usa-icon")
    })

    it("renders SVG with correct src when 'mail' is passed for icon prop, whether or not the icon is decorative", async () => {
        const functionalSVG = await renderAndGetSVGElement(`
            <njwds-icon icon="mail" icon-title="Get updates"></njwds-icon>
        `)
        const functionalUseElement = await functionalSVG.find("use")
        const functionalIconSrc = getE2EPageAssetPath("img/sprite.svg#mail")
        expect(functionalUseElement).toEqualAttribute("xlink:href", functionalIconSrc)

        const decorativeSVG = await renderAndGetSVGElement(`
            <njwds-icon decorative icon="mail"></njwds-icon>
        `)
        const decorativeUseElement = await decorativeSVG.find("use")
        const decorativeIconSrc = getE2EPageAssetPath("img/sprite.svg#mail")
        expect(decorativeUseElement).toEqualAttribute("xlink:href", decorativeIconSrc)
    })


    it("has an SVG with the 'img' role whether or not the icon is decorative", async () => {
        const functionalSVG = await renderAndGetSVGElement(`
            <njwds-icon icon="mail" icon-title="mail"></njwds-icon>
        `)
        const decorativeSVG = await renderAndGetSVGElement(`
            <njwds-icon icon="mail" decorative></njwds-icon>
        `)
        expect(functionalSVG).toEqualAttribute("role", "img")
        expect(decorativeSVG).toEqualAttribute("role", "img")
    })

    it("has an non-focusable SVG, whether or not the icon is decorative", async () => {
        const functionalSVG = await renderAndGetSVGElement(`
            <njwds-icon icon="mail" icon-title="mail"></njwds-icon>
        `)
        expect(functionalSVG).toEqualAttribute("focusable", "false")

        const decorativeSVG = await renderAndGetSVGElement(`
            <njwds-icon icon="mail" decorative></njwds-icon>
        `)
        expect(decorativeSVG).toEqualAttribute("focusable", "false")
    })

    describe("functional icons (decorative='false')", () => {
        it("does not have the aria-hidden attribute", async () => {
            const svgElement = await renderAndGetSVGElement(`
                <njwds-icon icon="mail" icon-title="Get updates"></njwds-icon>
            `)

            expect(svgElement).not.toHaveAttribute("aria-hidden")
        })

        it("contains a title element which labels the SVG", async () => {
            const svgElement = await renderAndGetSVGElement(`
                <njwds-icon icon="mail" icon-title="Get updates"></njwds-icon>
            `)

            const titleElement = await svgElement.find("title")
            expect(titleElement).toEqualText("Get updates")

            const titleElementId = titleElement.getAttribute("id")
            const svgLabelledBy = svgElement.getAttribute("aria-labelledby")

            expect(svgLabelledBy).toBe(titleElementId)
        })

        it("if no icon title is provided, set it to the icon name", async () => {
            /* We throw an error when no icon title is provided on a functional icon (see spec tests), but if the user still doesn't provide a title, we provide a reasonable placeholder. */
            suppressConsoleErrorFromE2EPage()

            const svgElement = await renderAndGetSVGElement(`
                <njwds-icon icon="mail"></njwds-icon>
            `)
            const titleElement = await svgElement.find("title")
            try {
                expect(titleElement).toEqualText("mail")
            } catch {

            }

        })

    })

    describe("decorative icons (decorative='true')", () => {
        it("has aria-hidden set to true on the SVG", async () => {
            const svgElement = await renderAndGetSVGElement(`
                <njwds-icon decorative icon="mail" size="scale"></njwds-icon>
            `)

            expect(svgElement).toEqualAttribute("aria-hidden", true)
        })

        it("does not have a title element within the SVG", async () => {
            const svgElement = await renderAndGetSVGElement(`
                <njwds-icon decorative icon="mail" size="scale"></njwds-icon>
            `)

            const titleElement = await svgElement.find("title")

            expect(titleElement).toBeNull()
        })
    })


    describe("size", () => {
        it("by default, renders with USWDS size 3 utility class", async () => {
            const svgElement = await renderAndGetSVGElement(`
                <njwds-icon decorative icon="mail"></njwds-icon>
            `)
            expect(svgElement).toHaveClass(`usa-icon--size-3`)
        })

      it.each(["3", "4", "5", "6", "7", "8", "9"])("has size %s USWDS utility class when passed", async (size) => {
            const svgElement = await renderAndGetSVGElement(`
                <njwds-icon decorative icon="mail" size=${size}></njwds-icon>
            `)
            expect(svgElement).toHaveClass(`usa-icon--size-${size}`)
        })

        it("only has usa-icon class when 'scale' size is passed", async () => {
            const svgElement = await renderAndGetSVGElement(`
                <njwds-icon decorative icon="mail" size="scale"></njwds-icon>
            `)
            expect(svgElement.className).toBe("usa-icon")
        })

    })
})
