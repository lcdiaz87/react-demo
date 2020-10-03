import React, { Component } from "react";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';

class GenericDoughnutChart extends Component {
    constructor(props){
        super(props);
        this.dataLabel = {visible: true};
    }
    render() {
        return (
            <AccumulationChartComponent id='charts' height={this.props.height}>
                <Inject services={[AccumulationDataLabel]} />
                <AccumulationSeriesCollectionDirective>
                    <AccumulationSeriesDirective dataLabel={this.dataLabel} dataSource={this.props.data} xName='x' yName='y' type='Pie' innerRadius='40%'/>
                </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
        );
    }
}
export default GenericDoughnutChart;