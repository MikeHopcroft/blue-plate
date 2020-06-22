import React from 'react';
import { connect } from 'react-redux'

import { ApplicationState, AnyAction, record } from "../actions";

interface Props {
  application: ApplicationState;
};

class InfoControl extends React.Component<Props> {
  render() {
    return (
      <div>
        <h1>
          Info { this.props.application.world ? 'world' : 'uninitialized' }
        </h1>
        But do thy worst to steal thyself away, For term of life thou art assured mine; And life no longer than thy love will stay, For it depends upon that love of thine. Then need I not to fear the worst of wrongs, When in the least of them my life hath end. I see a better state to me belongs Than that which on thy humour doth depend: Thou canst not vex me with inconstant mind, Since that my life on thy revolt doth lie.
      </div>
    );
  }
}

function mapStateToProps(application: ApplicationState) {
  return { application };
}

export default connect(mapStateToProps)(InfoControl);
