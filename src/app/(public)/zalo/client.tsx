"use client";

import { Button } from "antd";
import { useRouter } from "next/navigation";

const ZaloPage = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div>
      
      <Button type="primary" onClick={handleClick}>
        Back
      </Button>
    </div>
  );
};

export default ZaloPage;
