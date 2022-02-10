import {
  faChartBar,
  faChartPie,
  faList,
  faPercent,
  faPlus,
  faTicketAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Form, Formik } from "formik";
import React from "next/app";
import {
  Card,
  Content,
  Header,
  Main,
  Navbar,
  Sidebar,
  SidebarLink,
  SidebarList,
  Table,
  TableCell,
  TableRow,
  SidebarDropdown,
  Footer,
  ProgressBar,
  Dot,
  FormGroup,
  FormLabel,
  FormikField,
  Button,
  StatCard,
} from "../";

import "./tailwind.css";

const stories = {
  title: `Sample/Dashboard`,
};

export default stories;

export const Index = () => (
  <>
    <Sidebar
      title="Dev Kit"
      dropdown={
        <>
          <SidebarDropdown button={<span>Account</span>}>Test</SidebarDropdown>
        </>
      }
    >
      <SidebarList title="Production">
        <SidebarLink to="/admin/new" icon={faPlus}>
          Nouvelle Production
        </SidebarLink>
        <SidebarLink to="/admin/prod" icon={faList}>
          Mes Productions
        </SidebarLink>
        <SidebarLink to="/admin/support" icon={faTicketAlt}>
          Support
        </SidebarLink>
      </SidebarList>
    </Sidebar>
    <Main>
      <Navbar title="Dashboard">
        <SidebarDropdown
          placement="bottom"
          button={<span className="text-white">Account</span>}
        >
          <span className="px-2 uppercase text-sm font-bold">Test</span>
        </SidebarDropdown>
      </Navbar>
      <Header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            subTitle="TRAFFIC"
            title="350,897"
            arrow="down"
            data="3.48%"
            dataClassName="text-emerald-500"
            description="Since last month"
            icon={faChartBar}
            iconClassName="bg-red-500"
          />
          <StatCard
            subTitle="NEW USERS"
            title="2,356"
            arrow="down"
            data="3.48%"
            dataClassName="text-red-500"
            description="Since last week"
            icon={faChartPie}
            iconClassName="bg-orange-500"
          />
          <StatCard
            subTitle="SALES"
            title="924"
            arrow="down"
            data="1.10%"
            dataClassName="text-orange-500"
            description="Since yesterday"
            icon={faUser}
            iconClassName="bg-pink-500"
          />
          <StatCard
            subTitle="PERFORMANCE"
            title="49,65%"
            arrow="up"
            data="12%"
            dataClassName="text-emerald-500"
            description="Since last month"
            icon={faPercent}
            iconClassName="bg-capsule-blue"
          />
        </div>
      </Header>
      <Content>
        <Table
          headers={[`Project`, `Test`, `Truc`]}
          title="Test Table"
          data={[{ name: `Test`, price: `2500`, stock: 25 }]}
          pagenation
        >
          {({ name, price, stock }) => (
            <TableRow key={name}>
              <TableCell>{name}</TableCell>
              <TableCell>
                <Dot className="mr-2 text-emerald-500" />
                {price}
              </TableCell>
              <TableCell>
                <ProgressBar value={stock} />
              </TableCell>
            </TableRow>
          )}
        </Table>
        <Card className="max-w-lg">
          <Formik initialValues={{ name: `test` }} onSubmit={() => alert(`ok`)}>
            <Form>
              <FormGroup>
                <FormLabel>Test</FormLabel>
                <FormikField placeholder="Yes" name="test" />
              </FormGroup>
              <div className="w-full flex justify-end mt-5">
                <Button color="red">Test</Button>
              </div>
            </Form>
          </Formik>
        </Card>
        <Footer name="Dev Kit" />
      </Content>
    </Main>
  </>
);
