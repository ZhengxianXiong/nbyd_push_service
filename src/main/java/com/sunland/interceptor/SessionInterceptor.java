package com.sunland.interceptor;

//import com.sunland.dto.DeptUserInfo;
//import com.sunland.exception.AuthorizationException;
//import com.sunland.service.IAclUserService;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class SessionInterceptor implements HandlerInterceptor {

//    @Resource
//    private IAclUserService aclUserService;

    @Override
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object handler) throws Exception {
//        System.out.println("SessionInterceptor ---> preHandle");

//        HttpSession session = httpServletRequest.getSession();
//        DeptUserInfo deptUserInfo = (DeptUserInfo) session.getAttribute("deptUserInfo");
//        if (deptUserInfo == null) {
//            // 如果是ajax请求响应头会有，x-requested-with
//            if (httpServletRequest.getHeader("x-requested-with") != null
//                    && httpServletRequest.getHeader("x-requested-with").equalsIgnoreCase("XMLHttpRequest")) {
//                //在响应头设置session状态
//                httpServletResponse.setHeader("sessionstatus", "timeout");
//                httpServletResponse.getWriter().write("timeout");
//                return false;
//            } else {
//                throw new AuthorizationException();            //直接跳转
//            }
//        }
        return true;
//        else {
//            //session保存的Tag与数据库中当前登录用户对应的Tag做比较。
//            //如果不相同，此session已被踢掉。
////            DeptUserInfo tmp = aclUserService.getDeptUserInfo(deptUserInfo.getUsercode());
//            /*if (tmp.getSessiontag() == null || deptUserInfo.getSessiontag() == null ||
//                    !tmp.getSessiontag().equals(deptUserInfo.getSessiontag())) {*/
////            if (tmp.getSessiontag() != null && deptUserInfo.getSessiontag() != null &&
////                    !tmp.getSessiontag().equals(deptUserInfo.getSessiontag())) {
////                session.removeAttribute("deptUserInfo");
////                if (httpServletRequest.getHeader("x-requested-with") != null
////                        && httpServletRequest.getHeader("x-requested-with").equalsIgnoreCase("XMLHttpRequest")) {
////                    //在响应头设置session状态
////                    httpServletResponse.setHeader("sessionstatus", "kickoff");
////                } else {
////                    throw new KickOffException();
////                }
////            }
//            return true;
//        }
    }

    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {
//        System.out.println("SessionInterceptor ---> postHandle");
    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {
//        System.out.println("SessionInterceptor ---> afterCompletion");
    }
}
