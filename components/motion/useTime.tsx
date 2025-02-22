import { motion, useTime, useTransform } from "framer-motion";

interface RotatingBoxProps {
  size?: number;
  color?: string;
  duration?: number;
}

export default function RotatingBox({
  size = 100,
  color = "#ff0088",
  duration = 10000,
}: Readonly<RotatingBoxProps>) {
  const time = useTime();
  const rotate = useTransform(time, [0, duration], [0, 360], { clamp: false });

  return (
    <div className="absolute top-0 left-[200px] right-0 bottom-[50px] flex justify-start items-end gap-5">
      <div className="flex justify-center items-center flex-wrap gap-[50px]">
        <motion.div
          className="rounded-[5px]"
          style={{
            width: size,
            height: size,
            backgroundColor: color,
            rotate,
          }}
        />
      </div>
    </div>
  );
}