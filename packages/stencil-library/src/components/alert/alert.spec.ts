import { newSpecPage } from '@stencil/core/testing';
import { Alert } from './alert';

describe('<njwds-alert>', () => {
  describe('type', () => {
    it('renders without special styling by default', async () => {
      const page = await newSpecPage({
        components: [Alert],
        html: `<njwds-alert>test message</njwds-alert>`,
      });
      const alertDiv = page.root.querySelector('.usa-alert');
      expect(alertDiv.className).toBe('usa-alert');
    });

    it.each(['info', 'warning', 'error', 'emergency'])('renders type %s when passed', async type => {
      const page = await newSpecPage({
        components: [Alert],
        html: `<njwds-alert type=${type}>test message</njwds-alert>`,
      });
      const alertDiv = page.root.querySelector('.usa-alert');
      expect(alertDiv).toHaveClass(`usa-alert--${type}`);
    });
  });

  describe('role', () => {
    it.each(['error', 'emergency'])('sets role alert for %s', async type => {
      const page = await newSpecPage({
        components: [Alert],
        html: `<njwds-alert type=${type}>test message</njwds-alert>`,
      });
      const alertDiv = page.root.querySelector('.usa-alert');
      expect(alertDiv.getAttribute('role')).toEqual('alert');
    });

    it.each(['info', 'warning'])('does not set role for %s', async type => {
      const page = await newSpecPage({
        components: [Alert],
        html: `<njwds-alert type=${type}>test message</njwds-alert>`,
      });
      const alertDiv = page.root.querySelector('.usa-alert');
      expect(alertDiv.getAttribute('role')).toBeNull();
    });
  });

  describe('is-slim', () => {
    it('adds slim when is-slim is true', async () => {
      const page = await newSpecPage({
        components: [Alert],
        html: `<njwds-alert is-slim>test message</njwds-alert>`,
      });
      const alertDiv = page.root.querySelector('.usa-alert');
      expect(alertDiv).toHaveClass(`usa-alert--slim`);
    });

    it('does not display header when is-slim is true', async () => {
      const page = await newSpecPage({
        components: [Alert],
        html: `<njwds-alert is-slim>test message</njwds-alert>`,
      });
      const alertDiv = page.root.querySelector('.usa-alert');
      expect(alertDiv).toHaveClass(`usa-alert--slim`);
      expect(alertDiv.querySelector('.usa-alert__heading')).toBeNull();
    });
  });
});
