import React from "react";

class ErrBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errStatus: false,
            errinfo: []
        }
        // this.handleErrorStatus = this.handleErrorStatus.bind(this);
    }
    // handleErrorStatus () {
    //     const {errStatus} = this.state;
    //     this.setState({errStatus: !errStatus});
    // }

    static getDerivedStateFromError() {
        return {errStatus: true};
    }

    componentDidCatch(err, errInfo) {
        this.state.errinfo.push(err)
        this.state.errinfo.push(errInfo)
        this.setState({errinfo:Object.assign([],this.state.errinfo)});
    }

    render() {
        if (this.state.errStatus) {
            return (
                <React.Fragment>
                    <h1>에러 페이지</h1>
                    {this.state.errinfo.map(e => <h3 key={e.toString()}>{e.toString()}</h3>)}
                </React.Fragment>
            )
        }
        return this.props.children;
    }
}

export default ErrBoundary;