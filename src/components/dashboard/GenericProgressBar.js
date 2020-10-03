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
                        height={this.props.height}
                        trackThickness={24}
                        progressThickness={24}
                        value={this.props.value}
                        enableRtl={false}
                        showProgressValue={true}
                        trackColor="#E5E5E5"
                        radius="100%"
                        progressColor="#21BF65"
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