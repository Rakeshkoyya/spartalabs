import { FlowLines } from "@/components/brand/flow-lines";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";

export default function NotFound() {
  return (
    <div className="band-dark relative overflow-hidden">
      <FlowLines className="bottom-0 h-1/2" />
      <Container className="relative flex min-h-[80vh] flex-col justify-center py-32">
        <Kicker>Error 404</Kicker>
        <h1 className="text-h1 font-display mt-4 max-w-[18ch] font-semibold text-white">
          This page is not part of the system.
        </h1>
        <p className="text-lede text-muted mt-5 max-w-[48ch]">
          The address does not match anything we have built. Head back to the start, or tell us what
          you were looking for.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Back to the start</Button>
          <Button href="/contact" variant="secondary">
            Tell us what you needed
          </Button>
        </div>
      </Container>
    </div>
  );
}
