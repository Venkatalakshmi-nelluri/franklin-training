import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the heading
 * @param {Element} block The heading block element
 */
export default async function decorate(block) {
  // load heading as fragment
  const headingMeta = getMetadata('heading');
  const headingPath = headingMeta ? new URL(headingMeta, window.location).pathname : '/heading';
  const fragment = await loadFragment(headingPath);

  // decorate heading DOM
  block.headingContent = '';
  const heading = document.createElement('div');
  while (fragment.firstElementChild) heading.append(fragment.firstElementChild);

  block.append(heading);
}
