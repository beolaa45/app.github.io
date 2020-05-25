// import React from 'react';
// import { configure, shallow } from 'enzyme'; 
// //shaollow sử dụng phổ biến để rendering react component trong nhêu hoàn cảnh
// import Apdapter from 'enzyme-adapter-react-16';
// import NavigationItems from './NavigationItems';
// import NavigaItem from './NavigationItem/NavigationItem';
// configure({adapter: new Apdapter()})

// describe('<NavigaItems />', () => {
//     it('should render two <navifationItem /> elements if no authentice', () => {
//         const wrapper = shallow(<NavigationItems />) //jsx trong shallow method
//         expect(wrapper, find(NavigationItem), toHaveLength(2)) //use a utility function provided by enzyme defind method, 
//         // find() cho pép nhìn vào wapper nếu thấy chứa đựng content duy nhất
//         //truyền vào normal exporoed functon của navigation file
//         //trả về  array 
//     });

//     it('should render two <navifationItem /> elements if no authentice', () => {
//         const wrapper = shallow(<NavigationItems isAuthenticated />) //jsx trong shallow method
//         expect(wrapper, find(NavigationItem), toHaveLength(3)) //use a utility function provided by enzyme defind method, 
//         // find() cho pép nhìn vào wapper nếu thấy chứa đựng content duy nhất
//         //truyền vào normal exporoed functon của navigation file
//         //trả về  array 
//     })
// })
