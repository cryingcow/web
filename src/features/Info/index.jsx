import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
Info.propTypes = {
    
};

function Info(props) {
    return (
        <div className='margin'>
            <table>
                <tr>
                    <th>Ngày giờ</th>
                    <th>Thời gian</th>
                    <th>Id</th>
                    <th>Họ</th>
                    <th>Tên</th>
                    <th>Sđt</th>
                    <th>Địa chỉ</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                </tr>
            </table>
        </div>
    );
}

export default Info;