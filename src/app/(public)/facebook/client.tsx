"use client";

import { Button } from "antd";
import { useRouter } from "next/navigation";

const FacebookPage = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div>
      <div>
        <span>Facebook</span>
      </div>
      <Button type="primary" onClick={handleClick}>
        Back
      </Button>
    </div>
  );
};

export default FacebookPage;
