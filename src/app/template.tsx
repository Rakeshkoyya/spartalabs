/**
 * React remounts a template on every navigation, so the route-change sweep
 * replays each time. The reveals themselves live in the layout and key off the
 * pathname — a template remount is not a reliable signal that the incoming
 * page's DOM is queryable.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-px">
        <div data-route-sweep="" className="h-px w-full bg-accent-core" />
      </div>
      {children}
    </>
  );
}
