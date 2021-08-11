package com.comento.service;

import com.comento.controller.dto.PostDTO;
import com.comento.domain.Post;
import com.comento.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public Post writePost(PostDTO postDTO) {
        String title = postDTO.getTitle();
        String content = postDTO.getContent();

        Post post = new Post();
        post.setTitle(title);
        post.setContent(content);

        return postRepository.save(post);
    }

    public String deletePost(Long id){

        postRepository.deleteById(id);
        return id +" is deleted";    }

    public Post putPost(Long id, PostDTO postDTO){
        Post post = postRepository.findById(id).get();
        post.setContent(postDTO.getContent());
        post.setTitle(postDTO.getTitle());
        return postRepository.save(post);
    }

    public Post readPost(Long id) {
        return postRepository.findById(id).orElse(null);
    }

    public List<Post> readPosts() {
        List<Post> posts = postRepository.findAll();
        return posts;
    }
}
