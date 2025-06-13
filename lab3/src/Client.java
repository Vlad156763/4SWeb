import org.apache.xmlrpc.client.XmlRpcClient;
import org.apache.xmlrpc.client.XmlRpcClientConfigImpl;

import java.net.URL;
import java.util.Arrays;
import java.util.Scanner;

public class Client {
    public static void main(String[] args) {
        try {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Введи перше число: ");
            int a = scanner.nextInt();
            System.out.print("Введи друге число: ");
            int b = scanner.nextInt();

            // Конфігурація клієнта
            XmlRpcClientConfigImpl config = new XmlRpcClientConfigImpl();
            config.setServerURL(new java.net.URI("http://localhost:8000").toURL());

            XmlRpcClient client = new XmlRpcClient();
            client.setConfig(config);

            Object result = client.execute("SumServer.sum", Arrays.asList(a, b));
            System.out.println("Результат: " + result);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

