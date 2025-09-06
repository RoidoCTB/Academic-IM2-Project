import LoginFooter from "../../components/LoginFooter";

const layout = ({ children }) => {
  return (
    <div className="flex flex-col ">
      <main className="min-h-screen">{children}</main>
      <LoginFooter />
    </div>
  );
};

export default layout;
