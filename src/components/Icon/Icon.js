import {
  Tv,
  Menu,
  Search,
  ArrowRight,
  ChevronUp,
  StopCircle,
  Check,
  Lock,
  Clock,
  Twitter,
  Info,
  Play,
  Youtube,
  Facebook,
  Linkedin,
  BookOpen,
} from "react-feather";

const icons = {
  tv: Tv,
  menu: Menu,
  search: Search,
  arrowRight: ArrowRight,
  chevronUp: ChevronUp,
  coin: StopCircle,
  check: Check,
  lock: Lock,
  clock: Clock,
  twitter: Twitter,
  facebook: Facebook,
  linkedin: Linkedin,
  info: Info,
  play: Play,
  youtube: Youtube,
  bookmark: BookOpen,
};

function Icon({ id, color, size, strokeWidth, className = "", ...delegated }) {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }
  const newStokeWidth = strokeWidth ? strokeWidth : 2;
  return (
    <div className={className}>
      <Component
        color={color}
        strokeWidth={newStokeWidth}
        size={size}
        {...delegated}
      />
    </div>
  );
}

export default Icon;
