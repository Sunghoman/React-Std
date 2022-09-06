function Detail() {

  return (
    <div className='contianer'>
      <div className='row'>
        <div className='col-md-6'>
          <img src="https://www.samyangfoods.com/upload/product/20181031/20181031094039947080.jpg" alt="간짬뽕" width="100%"/>
        </div>
        <div className='col-md-6 mt-4'>
          <h4 className='pt-5'>Title</h4>
          <p>Content</p>
          <p>별점</p>
          <button className='btn btn-danger'>댓글달기</button>
        </div>
      </div>
    </div>
  );
}


export default Detail;
