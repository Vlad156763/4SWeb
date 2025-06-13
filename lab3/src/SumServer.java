import org.apache.xmlrpc.webserver.WebServer;
import org.apache.xmlrpc.server.PropertyHandlerMapping;
import org.apache.xmlrpc.server.XmlRpcServer;
import org.apache.xmlrpc.server.XmlRpcServerConfigImpl;

public class SumServer {
    public int sum(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        try {
            System.out.println("Запуск XML-RPC сервера...");
            WebServer webServer = new WebServer(8000);
            XmlRpcServer xmlRpcServer = webServer.getXmlRpcServer();

            PropertyHandlerMapping phm = new PropertyHandlerMapping();
            phm.addHandler("SumServer", SumServer.class);
            xmlRpcServer.setHandlerMapping(phm);

            XmlRpcServerConfigImpl serverConfig = (XmlRpcServerConfigImpl) xmlRpcServer.getConfig();
            serverConfig.setEnabledForExtensions(true);
            serverConfig.setContentLengthOptional(false);

            webServer.start();
            System.out.println("Сервер запущено на http://localhost:8000");
        } catch (Exception e) {
            System.err.println("Помилка: " + e.getMessage());
        }
    }
}

