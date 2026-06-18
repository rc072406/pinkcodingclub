export interface Lesson {
  step: string;
  title: string;
  focus: string;
  desc: string;
  href?: string;
  isLocked: boolean;
}

export const webDesignLessons: Lesson[] = [
  {
    step: "01",
    title: "The Editorial Skeleton",
    focus: "HTML5 & Semantic Structure",
    desc: "Think of HTML as the pattern-making stage of a garment. We learn to structure content using tags that tell a story, moving far beyond basic 'Hello World' examples into magazine-style layouts.",
    href: "/htmllessons",
    isLocked: false
  },
  {
    step: "02",
    title: "The Pink Palette & Typography",
    focus: "CSS Fundamentals",
    desc: "Color theory is tech theory. We dive into Hex codes, RGB, and Google Fonts to master the 'aesthetic' of the web. Learn how to use CSS variables to swap themes like a seasonal collection.",
    href: "/csspart1",
    isLocked: false
  },
  {
    step: "03",
    title: "Runway Flow",
    focus: "Flexbox & Positioning",
    desc: "Aligning elements with the precision of a runway show. Building navigation bars and image galleries that 'flow' across the screen without breaking the grid.",
    isLocked: true
  },
  {
    step: "04",
    title: "Couture Grids",
    focus: "CSS Grid & Overlays",
    desc: "Complex, overlapping layouts inspired by high-fashion posters. Learning to break the 'boring' box model and create high-impact visual hierarchies.",
    isLocked: true
  }
];
