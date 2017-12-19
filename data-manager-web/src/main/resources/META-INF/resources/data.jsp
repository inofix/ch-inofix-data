<%--
    data.jsp: Data panel of Inofix' data-manager.
    
    Created:     2017-12-11 22:14 by Christian Berndt
    Modified:    2017-12-19 16:10 by Christian Berndt
    Version:     1.0.1
--%>

<%@ include file="/init.jsp" %>

<%
    String redirect = ParamUtil.getString(request, "redirect");

    PortletURL portletURL = renderResponse.createRenderURL();

    portletURL.setParameter("mvcPath", "/view.jsp");
    portletURL.setParameter("redirect", redirect);
    portletURL.setParameter("tabs1", "data");
%>

<aui:nav-bar cssClass="navbar-collapse-absolute" markupView="<%= markupView %>">
    <aui:nav cssClass="navbar-nav">

        <%
            portletURL.setParameter("tabs2", "channels");
        %>

        <aui:nav-item
            href="<%= portletURL.toString() %>"
            label="channels"
            selected='<%= tabs2.equals("channels") %>'
        />
        
        <%
            portletURL.setParameter("tabs2", "graphs");
        %>

        <aui:nav-item
            href="<%= portletURL.toString() %>"
            label="graphs"
            selected='<%= tabs2.equals("graphs") %>'
        />

        <%
            portletURL.setParameter("tabs2", "list");
        %>

        <aui:nav-item
            href="<%= portletURL.toString() %>"
            label="list"
            selected='<%= tabs2.equals("list") %>'
        />
        
    </aui:nav>
</aui:nav-bar>

<c:choose>
    <c:when test="<%= "graphs".equals(tabs2) %>">
        <liferay-util:include page="/data_graph.jsp" servletContext="<%= application %>"/>
    </c:when>
    <c:when test="<%= "list".equals(tabs2) %>">
        <liferay-util:include page="/data_list.jsp" servletContext="<%= application %>"/>
    </c:when>
    <c:otherwise>
        <liferay-util:include page="/data_channels.jsp" servletContext="<%= application %>"/>
    </c:otherwise>
</c:choose>
