export interface GuideTreeNode {
  name: string;
  title: string;
  url?: string;
  children: GuideTreeNode[];
}

export type GuideTree = GuideTreeNode[];

function segmentToTitle(seg: string): string {
  return seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function parseSegment(seg: string) {
  const match = seg.match(/^(\d+)-(.*)$/);
  if (match) {
    return {
      order: Number(match[1]),
      name: match[2],
    };
  }
  return { order: Infinity, name: seg };
}

function ensureChild(
  children: GuideTreeNode[],
  seg: { name: string; order: number }
) {
  let node = children.find((c) => c.name === seg.name);
  if (!node) {
    node = {
      name: seg.name,
      title: segmentToTitle(seg.name),
      children: [],
    };
    (node as any)._order = seg.order;
    children.push(node);
  }
  return node;
}

export function buildGuideTree(
  entries: Array<{ id: string; data: { title?: string } }>,
  currentLang: string
): GuideTree {
  const tree: GuideTree = [];

  for (const e of entries) {
    const rawId = e.id.replace(/\.mdx?$/, "");

    const parts = rawId.split("/");
    const lang = parts[0];
    if (lang !== currentLang) continue;

    const segments = parts.slice(1).map(parseSegment);
    if (segments.length === 0) continue;

    const slug = segments.map((s) => s.name).join("/");
    const url = `/${lang}/guide/${slug}`;
    const dataTitle = e.data.title;

    const dirs = segments.slice(0, -1);
    const last = segments[segments.length - 1];

    let children = tree;
    let parent: GuideTreeNode | undefined;

    for (const dirSeg of dirs) {
      const node = ensureChild(children, dirSeg);
      parent = node;
      children = node.children;
    }

    if (last.name === "index") {
      if (parent) {
        parent.title = dataTitle ?? parent.title ?? segmentToTitle(parent.name);
        parent.url = url;
      } else {
        let root = ensureChild(tree, last);
        root.title = dataTitle ?? root.title ?? "Inicio";
        root.url = url;
      }
    } else {
      let leaf = children.find((n) => n.name === last.name);
      if (!leaf) {
        leaf = {
          name: last.name,
          title: dataTitle ?? segmentToTitle(last.name),
          url,
          children: [],
        };
        (leaf as any)._order = last.order;
        children.push(leaf);
      } else {
        leaf.title = dataTitle ?? leaf.title ?? segmentToTitle(last.name);
        leaf.url = url;
      }
    }
  }

  function sortTree(nodes: GuideTreeNode[]) {
    nodes.sort((a, b) => {
      const ao = (a as any)._order ?? Infinity;
      const bo = (b as any)._order ?? Infinity;
      if (ao !== bo) return ao - bo;
      return a.title.localeCompare(b.title, currentLang);
    });

    nodes.forEach((n) => sortTree(n.children));
  }

  sortTree(tree);

  return tree;
}
