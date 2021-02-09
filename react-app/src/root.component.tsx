import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default function Root(props) {
  const link1 = <Link to="/operator/myapp">Link 1</Link>;
  const link2 = <Link to="/configurator/myapp">Link 2</Link>;
  return (
    <section>
      {props.name} is mounted!
      <BrowserRouter>
        <Switch>
          <Route exact path="/operator/myapp" render={() => link2} />
          <Route exact path="/configurator/myapp" render={() => link1} />
          <Route
            default
            render={() => (
              <div>
                {link1}
                {link2}
              </div>
            )}
          />
        </Switch>
      </BrowserRouter>
    </section>
  );
}
