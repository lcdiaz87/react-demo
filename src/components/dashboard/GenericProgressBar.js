import React, { Component } from "react";
import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';

class GenericProgressBar extends Component {
    constructor(props){
        super(props);
        this.dataLabel = {visible: true};
    }
    render() {
        return (
            <ProgressBarComponent id={this.props.id}
                        type={this.props.type}
                        height="100%"
                        trackThickness={24}
                        progressThickness={24}
                        value={this.props.value}
                        enableRtl={false}
                        showProgressValue={true}
                        trackColor={this.props.bgcolor}
                        radius="100%"
                        progressColor={this.props.color}
                        cornerRadius="Round"
                        animation={{
                            enable: true,
                            duration: 2000,
                            delay: 0,
                        }}>
            </ProgressBarComponent>
            
        );
    }
}
export default GenericProgressBar;