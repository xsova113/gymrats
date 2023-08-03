import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("h-full md:px-10 px-4 py-10 pt-24", className)}>
      {children}
    </div>
  );
};

export default Container;
