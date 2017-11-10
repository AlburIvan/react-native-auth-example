import React, { Component}  from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';
 
export default class LoginForm extends Component {

    state = { text: ''};

    render() {
        return(
            <Card>
                <CardSection>
                    <TextInput
                        value={this.state.text}
                        onChangeText={text => this.setState({ text })}
                        style={{ height: 40, width: 100}}
                    
                    />
                </CardSection>
                <CardSection />
                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>

            </Card>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: "#cecece",
      marginTop: 24,
    }
});
