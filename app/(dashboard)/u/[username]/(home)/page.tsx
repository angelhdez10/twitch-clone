import { getSelfByUserName } from "@/lib/auth-service";

const DashboardPage = ({
  params,
}: {
  params: {
    username: string;
  };
}) => {
  const user = getSelfByUserName(params.username);
  return <div> Dashboard</div>;
};

export default DashboardPage;
