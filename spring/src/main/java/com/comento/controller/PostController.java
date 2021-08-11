package com.comento.controller;

import com.comento.controller.dto.PostDTO;
import com.comento.domain.Post;
import com.comento.repository.PostRepository;
import com.comento.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class PostController {

    @Autowired
    private PostService postService;

    @PostMapping("post")
    public Post writePost(@RequestBody PostDTO postDTO) {
        return postService.writePost(postDTO);
    }

    @GetMapping("post/{id}")
    public Post readPost(@PathVariable Long id) {
            return postService.readPost(id);
    }

    @GetMapping("posts")
    public List<Post> readPosts(){
        return postService.readPosts();
    }

    @DeleteMapping("post/{id}")
    public String deletePost(@PathVariable Long id){ return  postService.deletePost(id);}

    @PutMapping("post/{id}")
    public Post putPost(@PathVariable Long id, @RequestBody PostDTO postDTO){ return postService.putPost(id,postDTO);}

}
