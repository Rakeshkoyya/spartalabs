import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col justify-center py-32">
      <Kicker rule={false}>Error 404</Kicker>
      <h1 className="text-h1 mt-4 max-w-[18ch] font-display font-bold">
        This page is not part of the system.
      </h1>
      <p className="mt-5 max-w-[48ch] text-lede text-muted">
        The address does not match anything we have built. Head back to the start, or tell us what
        you were looking for.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/">Back to the start</Button>
        <Button href="/#contact" variant="secondary">
          Tell us what you needed
        </Button>
      </div>
    </Container>
  );
}
