import React, { Component } from "react";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';

class GenericDoughnutChart extends Component {
    constructor(props){
        super(props);
        this.dataLabel = {visible: true};
    }
    render() {
        return (
            <div>
                <div className="fill-width-blocked">
                    {
                        this.props.companies.map((company, index) =>
                        <div key={index} className="blocked justify-content-center">
                            <h4>{company.name}</h4>
                        </div>
                    )
                    }
                </div>
                <div className="fill-width-blocked">
                    {
                        
                        this.props.companies.map((company, index) =>
                            <div key={index} className="blocked justify-content-center">
                                <AccumulationChartComponent id={company.id} height={this.props.height} width={this.props.width}>
                                    <Inject services={[AccumulationDataLabel]} />
                                    <AccumulationSeriesCollectionDirective>
                                        <AccumulationSeriesDirective dataLabel={this.dataLabel} dataSource={company.employees} xName='x' yName='y' type='Pie' innerRadius='40%'/>
                                    </AccumulationSeriesCollectionDirective>
                                </AccumulationChartComponent>
                                
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}
export default GenericDoughnutChart;