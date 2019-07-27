import React, { Component } from 'react'; //from package.json
/*
import {
    Actions,
} from 'react-native-router-flux';
*/

import { GiftedChat } from 'react-native-gifted-chat';

class Chat extends Component {
    state = {
        messages: []
    };
    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={(message) => {
                    // send message to your backend
                }}
                user={{
                    _id: 1,
                }}
            />
        );
    }
}

/*
Chat.defaultProps = {
    name: 'John',
};

Chat.propTypes = {
    name: React.PropTypes.string,
};
*/
export default Chat;