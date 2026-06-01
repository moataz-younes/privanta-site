import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="container section-medium" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center"
      >
        <div className="relative">
          <h2 className="type-h2-final-cta font-heading font-bold leading-tight max-w-2xl mx-auto">
            Deploy <span className="text-gradient">intelligence behind trust</span>.
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto text-sm">
            Activate Privanta as your cyber intelligence infrastructure and move from reactive compliance to controlled execution.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button variant="hero" size="default" className="group">
              Request Private Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="default">Explore Intelligence</Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
