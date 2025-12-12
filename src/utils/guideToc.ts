export interface AstroHeading {
  depth: number;
  slug: string;
  text: string;
}

export interface GuideTocItem {
  depth: number;
  slug: string;
  text: string;
  children: GuideTocItem[];
}

export function buildToc(headings: AstroHeading[]): GuideTocItem[] {
  const toc: GuideTocItem[] = [];
  const stack: GuideTocItem[] = [];

  for (const h of headings) {
    const node: GuideTocItem = {
      depth: h.depth,
      slug: h.slug,
      text: h.text,
      children: [],
    };

    if (stack.length === 0 || h.depth <= stack[stack.length - 1].depth) {
      toc.push(node);
      stack.length = 1;
      stack[0] = node;
      continue;
    }

    while (stack.length > 0 && stack[stack.length - 1].depth >= h.depth) {
      stack.pop();
    }

    if (stack.length > 0) {
      stack[stack.length - 1].children.push(node);
    } else {
      toc.push(node);
    }

    stack.push(node);
  }

  return toc;
}
