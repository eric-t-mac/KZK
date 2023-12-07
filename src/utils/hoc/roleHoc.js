import React from "react";

export default function roleHoc(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                userinfo: {}
            }
        }
        componentDidMount() {
            this.setState({
                userinfo: {
                    role: 2,
                    mobile: '13333333333',
                    username: '小王'
                }
            })
        }
        render() {
            let { userinfo } = this.state
            let props = this.props

            return (
                <div>
                    <WrappedComponent userinfo={userinfo} {...props}/>
                </div>
            )
        }
    }
}