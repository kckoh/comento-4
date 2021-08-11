package com.comento;

import com.comento.controller.dto.PostDTO;
import com.comento.util.JacksonUtils;
import jdk.jfr.ContentType;
import org.hamcrest.CoreMatchers;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.ValueSource;
import org.springframework.boot.test.context.SpringBootTest;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.result.ContentResultMatchers;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.filter.CharacterEncodingFilter;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
class ComentoApplicationTests {

	private MockMvc mockMvc;

	@Autowired
	private WebApplicationContext ctx;

	@BeforeEach
	void setup() {
		this.mockMvc = MockMvcBuilders
				.webAppContextSetup(ctx)
				.addFilters(new CharacterEncodingFilter("UTF-8", true))
				.alwaysDo(print())
				.build();
	}

	@Test
	public void testWritingPost() throws Exception {

		PostDTO postDTO = new PostDTO();
		postDTO.setTitle("안녕123");
		postDTO.setContent("잘가1234");

		String jsonDTO = JacksonUtils.toJson(postDTO);

		mockMvc
				.perform(
						post("/api/post")
								.contentType(MediaType.APPLICATION_JSON)
								.content(jsonDTO))
				.andExpect(status().is(HttpStatus.OK.value()))
				.andExpect(jsonPath("$.title").value("안녕123"))
				.andExpect(jsonPath("$.content").value("잘가1234"));
	}


	@ParameterizedTest
	@ValueSource(longs = {1,2,3,4,5,6,7,8,9,10})
	public void testReadingPost(Long id) throws Exception {
//		db ddl-auto:update
//		testWritingPost();

//		added last line for checking empty responses
		mockMvc
				.perform(
						get("/api/post/{id}", id))
				.andExpect(status().is(HttpStatus.OK.value()))
				.andExpect(content().string(CoreMatchers.not("")));
	}

	@ParameterizedTest
	@ValueSource(longs = {1})
	public void testUpdatingPost(Long id) throws Exception{

		PostDTO postDTO = new PostDTO();
		postDTO.setTitle("hello world");
		postDTO.setContent("bye world");

		String jsonDTO = JacksonUtils.toJson(postDTO);
		mockMvc
				.perform(
						put("/api/post/{id}",id)
								.contentType(MediaType.APPLICATION_JSON)
								.content(jsonDTO))
				.andExpect(status().is(HttpStatus.OK.value()))
				.andExpect(jsonPath("$.title").value(postDTO.getTitle()))
				.andExpect(jsonPath("$.content").value(postDTO.getContent()));
	}


	@ParameterizedTest
	@ValueSource(longs = {8})
	public void testDeletingPost(Long id) throws Exception{
		mockMvc
				.perform(
						delete("/api/post/{id}", id)
				)
				.andExpect(content().string( id + " is deleted"))
				.andExpect(status().is(HttpStatus.OK.value()));
	}

	@Test
	public void testReadingPosts() throws Exception{
		mockMvc
				.perform(
						get("/api/posts"))
				.andExpect(status().is(HttpStatus.OK.value()))
				.andExpect(content().string(CoreMatchers.not("")));
	}

}
