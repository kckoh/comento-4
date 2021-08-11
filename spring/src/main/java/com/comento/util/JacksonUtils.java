package com.comento.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JacksonUtils {
    private static final ObjectMapper mapper = new ObjectMapper();

    public static String toJson(Object value) throws JsonProcessingException {
        return mapper.writeValueAsString(value);
    }
}
