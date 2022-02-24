import React, {useState} from "react";
import {Editor} from "@tinymce/tinymce-react";
import axios from "axios";

function AddPost(props) {
  const [data, setData] = useState({
    title: "",
    desc: "",
  });
  const handleEditorChange = (e) => {
    console.log("Content was updated:", e.target.getContent());
  };
  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/posts/addPost").then((res) => {
      console.log(res.data);
    });

    // await axios({
    //   url: "http://localhost:5000/posts/addPost",
    //   data: {data},
    //   headers: {"Content-Type": "application/json"},
    //   method: "POST",
    // }).then((res) => {
    //   console.log(res);
    // });
  };
  return (
    <div>
      <Editor
        initialValue="<p>Initial content</p>"
        apiKey="gl1rru2ljskqli0g5d2olautlnizoqahcf9qz85fei3ne2zm"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code",
            "insertdatetime media table paste wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help",
        }}
        onChange={handleEditorChange}
      />

      <form action="" onSubmit={handleSubmit} onChange={handleChange}>
        <input type="text" name="title" />
        <textarea name="" type="text" name="desc" />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default AddPost;
