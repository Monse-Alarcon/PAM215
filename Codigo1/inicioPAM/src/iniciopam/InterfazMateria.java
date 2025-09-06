
package iniciopam;
import javax.swing.*;

public class InterfazMateria extends JFrame {
    
    private InicioPAM materia = new InicioPAM();
    
    public InterfazMateria() {
        // 1. Poner título a la ventana
        setTitle("Información de POO");
    
        // 2. Definir el tamaño (ancho, alto)
        setSize(500, 400);

        // 3. Qué pasa al cerrar la ventana
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // 4. Centrar la ventana en la pantalla  
        setLocationRelativeTo(null);
        
        // Botones
        JButton btnReglamento = new JButton("Reglamento POO");
        JButton btnLineamientos = new JButton("Lineamientos Classroom");
        JButton btnFechas = new JButton("Fechas de Parciales");
        JButton btnPorcentajes = new JButton("Porcentajes");
    }
   
    public static void main(String[] args) {
        InterfazMateria ventana = new InterfazMateria();
        ventana.setVisible(true);
    }
}
