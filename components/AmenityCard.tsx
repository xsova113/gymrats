import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { duration } from "moment";

interface AmenityCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const childVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const AmenityCard = ({ title, description, icon: Icon }: AmenityCardProps) => {
  const router = useRouter();

  return (
    <motion.div variants={childVariant} transition={{ duration: 0.3 }} className="flex">
      <Tilt options={{ max: 45, scale: 1, speed: 450 }}>
        <Card className="bg-black/40 flex flex-col h-full">
          <CardHeader className="gap-2">
            <Icon size={35} />
            <CardTitle className="text-red-600">{title}</CardTitle>
          </CardHeader>
          <CardContent className="mb-auto">
            <p>{description}</p>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => router.push("/services/membership")}
              className="w-full bg-red-600 hover:bg-red-600/90 text-stone-100 uppercase"
            >
              Start Today
            </Button>
          </CardFooter>
        </Card>
      </Tilt>
    </motion.div>
  );
};

export default AmenityCard;
