import React from "react";
import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";
import { WrapperContainer } from "../../App-styled";
import MoreUser from "./MoreUser";
import { Wrapper, WrapperTeacher } from "./styled-index";
import "./styles.css";
export default function Teacher() {
  const [activeTab, setActiveTab] = React.useState(9);
  const onTabClick = (e, index) => {
    setActiveTab(index);
  };
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <WrapperTeacher>
      <WrapperContainer>
        <Wrapper>
          <div>
            <Tabs
              activeTab={activeTab}
              onTabClick={onTabClick}
              tabsScrollAmount={1}
              hideNavBtnsOnMobile={false}
            >
              {data.map((item) => (
                <Tab onTabClick={null} className="card" key={item}>
                  <img
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                    alt=""
                  />
                  <h3>User User</h3>
                </Tab>
              ))}
            </Tabs>
          </div>
          <MoreUser/>
        </Wrapper>
      </WrapperContainer>
    </WrapperTeacher>
  );
}
