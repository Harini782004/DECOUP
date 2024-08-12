import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'; // Import chart.js/auto to initialize Chart.js
import './DashboardPage.css';

const DashboardPage = () => {
    const data = {
        labels: ['Amazon', 'Myntra', 'Ajio', 'Zomato', 'Others'],
        datasets: [
            {
                label: 'Coupon Usage',
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }
        ]
    };

    return (
        <Container className="mt-5 dashboard-container">
            <Row className="justify-content-md-center">
                <Col md="6">
                    <h2 className="text-center">Dashboard</h2>
                    <Pie data={data} />
                </Col>
            </Row>
        </Container>
    );
};

export default DashboardPage;
