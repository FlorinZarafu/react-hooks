import React from "react";
import { UserContext, ChannelContext } from "../../../App";

function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <div>
              <ChannelContext.Consumer>
                {(chanel) => {
                  return (
                    <div>
                      User context Value {user}, Channel context value {chanel}
                    </div>
                  );
                }}
              </ChannelContext.Consumer>
            </div>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
