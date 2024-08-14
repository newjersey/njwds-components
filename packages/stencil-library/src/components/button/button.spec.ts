import { newSpecPage } from '@stencil/core/testing';
import { Button } from './button';

describe('<njwds-button>', () => {
  describe('asChild', () => {
    it('throws an error when asChild is true there are no slots', async () => {
      const renderButtonWithNoSlots = () =>
        newSpecPage({
          components: [Button],
          html: `<njwds-button as-child></njwds-button>`,
        });
      await expect(renderButtonWithNoSlots).rejects.toThrow();
    });

    it('throws an error when asChild is true and there is more than one slot', async () => {
      const renderButtonWithTwoSlots = () =>
        newSpecPage({
          components: [Button],
          html: `
            <njwds-button as-child>
                <button>slot 1</button>
                <button>slot 2</button>
            </njwds-button>`,
        });
      await expect(renderButtonWithTwoSlots).rejects.toThrow();
    });

    it('throws an error when asChild is true and the slot element is not a button', async () => {
      const renderButtonWithParagraphSlot = async () =>
        await newSpecPage({
          components: [Button],
          html: `
            <njwds-button as-child>
                <p>slot</p>
            </njwds-button>`,
        });
      await expect(renderButtonWithParagraphSlot).rejects.toThrow();
    });

    it('does not throw error when asChild is true and there is a single slot element that is a <button>', async () => {
      const page = await newSpecPage({
        components: [Button],
        html: `
          <njwds-button as-child="true">
              <button>slot</button>
          </njwds-button>`,
      });
      const slotElements = page.root.children;
      expect(slotElements.length).toBe(1);
      const slotElement = slotElements[0];
      expect(slotElement.tagName).toBe('BUTTON');
    });
  });
});
